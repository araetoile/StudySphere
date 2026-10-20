(function () {
  if (typeof SUBJECTS === "undefined") {
    const m =
      '<div class="wrap"><p class="msg err">Could not load js/data.js. Keep the js folder next to index.html with data.js, data2.js and app.js inside.</p></div>';
    ["subject-grid", "lesson-root"].forEach((i) => {
      const e = document.getElementById(i);
      if (e) e.innerHTML = m;
    });
    return;
  }
  const page = document.body.dataset.page;
  const nav = [
    ["index.html", "Home", "home"],
    ["index.html#subjects", "Subjects", "subject"],
    ["references.html", "References", "references"],
    ["about.html", "About", "about"],
  ];
  document.getElementById("site-header").innerHTML =
    `<header class="site"><div class="wrap bar"><a class="logo" href="index.html">StudySphere</a><button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button><nav class="nav" id="nav" aria-label="Main">${nav.map((n) => `<a href="${n[0]}"${n[2] === page ? ' class="active" aria-current="page"' : ""}>${n[1]}</a>`).join("")}</nav></div></header>`;
  document.getElementById("site-footer").innerHTML =
    `<footer class="site"><div class="wrap"><p><strong>StudySphere</strong> &middot; Created by etoileara.</p><p>${nav.map((n) => `<a href="${n[0]}">${n[1]}</a>`).join("")}</p></div></footer>`;
  const mb = document.querySelector(".menu-btn"),
    nv = document.getElementById("nav");
  mb.onclick = () =>
    mb.setAttribute("aria-expanded", nv.classList.toggle("open"));
  nv.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nv.classList.remove("open");
  });

  const grid = document.getElementById("subject-grid");
  if (grid)
    grid.innerHTML = SUBJECTS.map(
      (s) =>
        `<article class="card"><h3>${s.code}</h3><p class="sub">${s.title}</p><p>${s.desc}</p><p class="meta">${s.na ? "Coming later" : s.topics.length + " topics, each with a 10-question quiz"}</p>${s.na ? '<span class="btn alt off">Not Available</span>' : `<a class="btn" href="subject.html?s=${s.code}">View Lessons</a>`}</article>`,
    ).join("");

  const root = document.getElementById("lesson-root");
  if (root) {
    const q = new URLSearchParams(location.search);
    const sub = SUBJECTS.find((s) => s.code === q.get("s"));
    const i = Number(q.get("t") || 0);
    const t = sub && sub.topics[i];
    if (!t) {
      root.innerHTML =
        '<div class="wrap"><h1>Lesson not found</h1><p><a class="btn" href="index.html#subjects">Back to subjects</a></p></div>';
      return;
    }
    document.title = `${t.title} | ${sub.code} | StudySphere`;
    const link = (n) => `subject.html?s=${sub.code}&t=${n}`;
    root.innerHTML = `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <a href="index.html#subjects">Subjects</a> / ${sub.code} / ${t.title}</nav>
<div class="layout"><div><button class="side-btn" aria-expanded="false">Topics</button><aside class="sidebar" id="sidebar"><h2>${sub.code}</h2><p>${sub.title}</p><ul>${sub.topics.map((x, n) => `<li><a href="${link(n)}"${n === i ? ' class="active" aria-current="page"' : ""}>${x.title}</a></li>`).join("")}</ul></aside></div>
<article><h1>${t.title}</h1>${t.html}
<div class="pager">${i > 0 ? `<a class="btn alt" href="${link(i - 1)}">&larr; Previous Topic</a>` : '<span class="btn alt off">Previous Topic</span>'}<button class="btn" id="quiz-btn">Take the Quiz</button>${i < sub.topics.length - 1 ? `<a class="btn alt" href="${link(i + 1)}">Next Topic &rarr;</a>` : '<span class="btn alt off">Next Topic</span>'}</div>
<section id="quiz" hidden aria-live="polite"></section></article></div></div>`;
    if (t.init) t.init(root);
    const sb = root.querySelector(".side-btn");
    sb.onclick = () =>
      sb.setAttribute(
        "aria-expanded",
        root.querySelector("#sidebar").classList.toggle("open"),
      );
    const box = root.querySelector("#quiz");
    root.querySelector("#quiz-btn").onclick = () => {
      box.hidden = false;
      if (t.quiz && t.quiz.length === 10) quiz(box, t.quiz);
      else
        box.innerHTML =
          '<p class="msg err">No quiz yet. Add exactly 10 questions to this topic in <code>js/data.js</code>.</p>';
      box.scrollIntoView({ behavior: "smooth" });
    };
  }

  function quiz(box, qs) {
    box.innerHTML = `<h2>Quiz (10 questions)</h2><form novalidate>${qs.map((x, n) => `<fieldset><legend>${n + 1}. ${x.q.replace(/</g, "&lt;")}</legend>${x.o.map((o, k) => `<label><input type="radio" name="q${n}" value="${k}"> ${o.replace(/</g, "&lt;")}</label>`).join("")}<p class="fb" hidden></p></fieldset>`).join("")}<button class="btn" type="submit">Submit Answers</button><div class="msg" id="res" role="status" tabindex="-1"></div></form>`;
    const f = box.querySelector("form"),
      res = f.querySelector("#res");
    let done = false;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (done) return;
      const miss = qs
        .map((x, n) => (f["q" + n].value === "" ? n + 1 : 0))
        .filter(Boolean);
      if (miss.length) {
        res.className = "msg err";
        res.textContent =
          "Please answer every question. Unanswered: " + miss.join(", ") + ".";
        res.focus();
        return;
      }
      done = true;
      let s = 0;
      const sets = f.querySelectorAll("fieldset");
      qs.forEach((x, n) => {
        const ok = Number(f["q" + n].value) === x.a;
        if (ok) s++;
        sets[n].classList.add(ok ? "correct" : "wrong");
        const fb = sets[n].querySelector(".fb");
        fb.hidden = false;
        fb.innerHTML = `<strong>${ok ? "Correct." : "Incorrect."}</strong> Correct answer: ${x.o[x.a].replace(/</g, "&lt;")}. ${x.e.replace(/</g, "&lt;")}`;
      });
      f.querySelectorAll("input").forEach((el) => (el.disabled = true));
      f.querySelector("button[type=submit]").disabled = true;
      res.className = "msg ok";
      res.innerHTML = `<strong>Score: ${s}/${qs.length} (${Math.round((s / qs.length) * 100)}%)</strong> <button type="button" class="btn alt" id="retake">Retake Quiz</button>`;
      res.focus();
      f.querySelector("#retake").onclick = () => {
        quiz(box, qs);
        box.scrollIntoView();
      };
    });
  }
})();
