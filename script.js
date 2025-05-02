const testimonials = [
  {
    quote:
      "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
  {
    quote:
      "“Since integrating this AI-powered solution, our sales process has become faster, smarter, and far more efficient. It's like having a personal coach for every team member.”",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Md Omor Faruk",
    role: "CEO of Softvence",
  },
  {
    quote:
      "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
];

let current = 0;

function showTestimonial(index) {
  const t = testimonials[index];
  document.getElementById("quote").textContent = t.quote;
  document.getElementById("avatar").src = t.avatar;
  document.getElementById("name").textContent = t.name;
  document.getElementById("role").textContent = t.role;

  document.getElementById("counter").textContent = `${index + 1}/${
    testimonials.length
  }`;
}

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

window.addEventListener("DOMContentLoaded", () => {
  showTestimonial(current);
});
