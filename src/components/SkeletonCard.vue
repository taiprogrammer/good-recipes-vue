<template>
<div class="wrapper">
    <div class="container">
      <div class="container-cover">
        <div class="img"></div>
      </div>
      <div class="info-container">
        <div class="title"></div>
        <div class="info">
          <div class="time"></div>
          <div class="portions"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script script>

</script>

<style lang="css" scoped>
@keyframes loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
.wrapper {
    border-radius: 10px;

    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);

    overflow: hidden;
    position: relative;

    height: 30rem;
    width: 18.438rem;

    animation: loading 1s linear infinite alternate;
}

.container {
    width: 100%;
    height: 100%;
}

.container-cover {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img {
    background: #F2F2F2;
    height: 300px;
    max-width: 295px;
    width: 100%;
}

.info-container {
    padding: 1rem;
}

.title {
    background: #F2F2F2;
    width: 80%;
    height: 30px;
}

.info {
    margin-top: 0.5rem;

    gap: 0.5rem;
    display: flex;
    flex-direction: column;
}

.time, .portions {
    background: #F2F2F2;
    width: 60%;
    height: 20px;
}
</style>
