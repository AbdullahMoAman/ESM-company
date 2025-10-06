let selectedPlan = "";

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

function selectPlan(plan) {
  selectedPlan = plan;

  if (plan === "trial") {
    document.getElementById("trialModal").classList.remove("hidden");
    return;
  }

  document.getElementById("paymentModal").classList.remove("hidden");

  const planNames = {
    basic: "Basic Package",
    premium: "Integrated Package",
    enterprise: "Premium Package",
  };

  document.getElementById("modalTitle").textContent = `Pay ${planNames[plan]}`;
}

function closeModal() {
  document.getElementById("paymentModal").classList.add("hidden");
  document.getElementById("successModal").classList.add("hidden");
  document.getElementById("trialModal").classList.add("hidden");
}

function processPayment() {
  // Simulate payment processing
  setTimeout(() => {
    document.getElementById("paymentModal").classList.add("hidden");
    document.getElementById("successModal").classList.remove("hidden");
  }, 1000);
}

function downloadPDF() {
  // Simulate PDF download
  const link = document.createElement("a");
  link.href =
    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee7575a7-e899-4976-92da-4c741d74daab.png"; // Placeholder for actual PDF
  link.download = `دراسة_الجدوى_${selectedPlan}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  closeModal();
}

// Close modals when clicking outside
document.addEventListener("click", function (event) {
  const paymentModal = document.getElementById("paymentModal");
  const successModal = document.getElementById("successModal");
  const trialModal = document.getElementById("trialModal");

  if (event.target === paymentModal) {
    closeModal();
  }
  if (event.target === successModal) {
    closeModal();
  }
  if (event.target === trialModal) {
    closeModal();
  }
});

// Add smooth scrolling for header links
document.querySelectorAll('header a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
