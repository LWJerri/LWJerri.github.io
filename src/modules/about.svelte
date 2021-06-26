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
    font-size: 45px;
  }

  p {
    font-size: 25px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
    border-radius: 250px;
    pointer-events: none;
  }

  .about {
    margin: 25px 0px 50px 0px;
    color: #fff;
  }
</style>
