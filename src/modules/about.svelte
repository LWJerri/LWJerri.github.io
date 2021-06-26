<script lang="ts">
  import logo from "../assets/logo.png";
</script>

<div class="about">
  <img src={logo} alt="MY_AVATAR" />
  <h1>Andrey Zontov</h1>
  <p>Backend Node.js developer from Kyiv</p>
</div>

<style>
  h1 {
    font-size: 2.8125rem;
  }

  p {
    font-size: 1.5625rem;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
    border-radius: 15.625rem;
    pointer-events: none;
  }

  .about {
    margin: 1.5625rem 0rem 3.125rem 0rem;
    color: #fff;
  }
</style>
