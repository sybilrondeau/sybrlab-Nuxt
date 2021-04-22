<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  mounted() {
    const mouseCursor = document.querySelector('.cursor');

    // custom cursor
    window.addEventListener('mousemove', (e) => {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
    });

    // hover on links
    const links = document.querySelectorAll('.body-link');
    links.forEach((element) => {
      element.addEventListener('mouseleave', (e) => {
        mouseCursor.classList.remove('link-grow');
      });
      element.addEventListener('mouseover', (e) => {
        mouseCursor.classList.add('link-grow');
      });
    });
  },
};
</script>

<style lang="scss">
.cursor {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid white;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -20;
  opacity: 1;
  transition: transform 0.2s, background-color 0.2s;

  @media (any-pointer: none) {
    display: none;
  }
}
.link-grow {
  transform: scale(6) translate(-10%, -10%);
  animation: blob 3s linear infinite alternate;
}

@keyframes blob {
  0% {
    border-radius: 50%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
  100% {
    border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%;
  }
}

@keyframes arrowScale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
    transform-origin: left;
  }
}
</style>
