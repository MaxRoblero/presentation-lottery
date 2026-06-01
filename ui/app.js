/* ===================================================== */
/*                 🎓 PRESENTATION LOTTERY               */
/*                    Code by MaxRoblero                */
/* ===================================================== */

console.log(
  "%c",
  "font-size:14px;color:#64748b;"
);

console.log(
  "%c🎓 Presentation Lottery",
  "font-size:22px;font-weight:bold;color:#2563eb;"
);

console.log(
  "%cDeveloped by MaxRoblero",
  "font-size:14px;color:#64748b;"
);

/* ===================================================== */
/* 🔗 BACKEND COMMUNICATION                              */
/* ===================================================== */

async function fetchResults(teamCount) {
  const response = await fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ count: teamCount })
  });

  if (!response.ok) {
    throw new Error("Error en la petición al backend");
  }

  return await response.json();
}

/* ===================================================== */
/* 🏆 LEADERBOARD SYSTEM                                 */
/* ===================================================== */

function buildLeaderboard(teamCount) {
  const list = document.getElementById("leaderboardList");

  list.innerHTML = "";

  for (let pos = 1; pos <= teamCount; pos++) {
    let icon;

    if (pos === 1) icon = "🥇";
    else if (pos === 2) icon = "🥈";
    else if (pos === 3) icon = "🥉";
    else icon = `${pos}️⃣`;

    const li = document.createElement("li");

    li.setAttribute("data-pos", pos);
    li.innerHTML = `${icon} <span>?</span>`;

    list.appendChild(li);
  }
}

function updateLeaderboard(pos, teamName) {
  const li = document.querySelector(`li[data-pos="${pos}"]`);
  const span = li.querySelector("span");

  span.textContent = teamName;

  li.classList.add("revealed");
  li.style.opacity = 0;
  li.style.transform = "translateX(-20px)";

  setTimeout(() => {
    li.style.opacity = 1;
    li.style.transform = "translateX(0)";
  }, 50);

  if (pos === 1) {
    li.classList.add("highlight");
    playFinalCelebration();
  }
}

/* ===================================================== */
/* 📋 RESULT PROCESSING                                  */
/* ===================================================== */

function createRevealSequence(results) {
  const entries = Object.entries(results);

  return entries.sort((a, b) => b[1] - a[1]);
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/* ===================================================== */
/* 🎰 SLOT MACHINE ANIMATIONS                            */
/* ===================================================== */

function spinToTeam(teamName, remainingTeams, pos) {
  return new Promise(resolve => {
    const reel = document.getElementById("slotReel");

    const repetitions = 6;
    const names = [];

    for (let i = 0; i < repetitions; i++) {
      names.push(...shuffle(remainingTeams));
    }

    names.push(teamName);

    reel.innerHTML = names
      .map(name => `<div class="slot-item">${name}</div>`)
      .join("");

    const itemHeight = 60;
    const windowHeight =
      document.querySelector(".slot-window").offsetHeight;

    const finalOffset =
      (names.length - 1) * itemHeight -
      (windowHeight / 2 - itemHeight / 2);

    const duration = pos === 1 ? 6000 : 2500;
    const start = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      reel.style.transform =
        `translateY(-${eased * finalOffset}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(resolve, 1000);
      }
    }

    requestAnimationFrame(animate);
  });
}

function spinFinalTwo(teams) {
  return new Promise(resolve => {
    const reel = document.getElementById("slotReel");

    const names = [];
    const repetitions = 20;

    for (let i = 0; i < repetitions; i++) {
      names.push(teams[i % 2]);
    }

    const winnerIndex = Math.floor(Math.random() * 2);
    const winner = teams[winnerIndex];
    const loser = teams[1 - winnerIndex];

    names.push(winner);

    reel.innerHTML = names
      .map(name => `<div class="slot-item">${name}</div>`)
      .join("");

    const itemHeight = 60;
    const finalOffset = (names.length - 1) * itemHeight;

    const duration = 4000;
    const start = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      reel.style.transform =
        `translateY(-${eased * finalOffset}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => resolve({ winner, loser }), 1000);
      }
    }

    requestAnimationFrame(animate);
  });
}

/* ===================================================== */
/* 🎉 CELEBRATION EFFECTS                                */
/* ===================================================== */

function playFinalCelebration() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const shapes = ["circle", "rect", "triangle"];
  const palette = ["#2563eb", "#3b82f6", "#ffffff"];

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 100 + 50,
    tiltAngle: Math.random() * Math.PI,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    color: palette[Math.floor(Math.random() * palette.length)]
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tiltAngle);
      ctx.fillStyle = p.color;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "rect") {
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
      } else {
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.lineTo(p.r, p.r);
        ctx.lineTo(-p.r, p.r);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    });

    update();
  }

  function update() {
    confetti.forEach(p => {
      p.y += p.d / 100;
      p.x += Math.sin(p.tiltAngle) * 2;
      p.tiltAngle += 0.02;
    });
  }

  function loop() {
    draw();

    if (confetti.some(p => p.y < canvas.height + 20)) {
      requestAnimationFrame(loop);
    }
  }

  loop();
}

/* ===================================================== */
/* 🚀 MAIN APPLICATION FLOW                              */
/* ===================================================== */

document.getElementById("generateBtn").addEventListener(
  "click",
  async () => {
    const btn = document.getElementById("generateBtn");
    const input = document.getElementById("teamCount");
    const revealIndicator =
      document.getElementById("currentReveal");

    const teamCount = parseInt(input.value, 10);

    if (!teamCount || teamCount < 2) {
      alert(
        "Por favor ingresa un número válido de equipos (mínimo 2)."
      );
      return;
    }

    btn.disabled = true;
    input.disabled = true;

    revealIndicator.textContent =
      "Generando orden...";

    try {
      const results = await fetchResults(teamCount);

      buildLeaderboard(teamCount);

      const sequence =
        createRevealSequence(results);

      let remainingTeams =
        Object.keys(results);

      for (const [teamName, pos] of sequence) {
        if (remainingTeams.length === 2) {
          revealIndicator.textContent =
            "¡Sorteo final!";

          const { winner, loser } =
            await spinFinalTwo(remainingTeams);

          updateLeaderboard(1, winner);
          updateLeaderboard(2, loser);

          break;
        }

        revealIndicator.textContent =
          `Revelando posición #${pos}`;

        await spinToTeam(
          teamName,
          remainingTeams,
          pos
        );

        updateLeaderboard(pos, teamName);

        remainingTeams =
          remainingTeams.filter(
            team => team !== teamName
          );

        await new Promise(
          resolve => setTimeout(resolve, 1000)
        );
      }

      revealIndicator.textContent =
        "¡Orden completo!";
    } catch (error) {
      console.error(error);
      alert(
        "Error al generar el orden. Intenta nuevamente."
      );
    }

    btn.disabled = false;
    input.disabled = false;
  }
);

/* ===================================================== */
/* 🌙 DARK MODE SYSTEM                                   */
/* ===================================================== */

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

/* ===================================================== */
/* 📜 CREDITS MODAL                                      */
/* ===================================================== */

const creditsBtn = document.getElementById("creditsBtn");
const creditsModal = document.getElementById("creditsModal");
const closeModal = document.getElementById("closeModal");

creditsBtn.addEventListener("click", () => {
  creditsModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  creditsModal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === creditsModal) {
    creditsModal.style.display = "none";
  }
});

/* ===================================================== */
/*                   END OF FILE                         */
/* ===================================================== */
