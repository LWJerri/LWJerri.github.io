<script lang="ts">
  import { onMount } from "svelte";
  const newURL = "https://lwjerri.dev";

  onMount(() => {
    setTimeout(() => {
      window.location.href = newURL;
    }, 5000);
  });
</script>

<div class="main">
  <div style="text-align: center;">
    <img src="https://i.imgur.com/MlJSRqn.png" alt="AVATAR" style="width: 20vh;border-radius:100%;" />
    <h1 id="name" style="outline: none;font-size: 6vh;">Andrii Zontov</h1>
    <p style="font-size: 3.5vh;">
      Hello! This is my old personal page.<br />Use new link or you will be redirected after 5 seconds!
    </p>

    <p style="font-size: 3.5vh;">
      <a id="url" href={newURL}>{newURL}</a> <span>[<b>Clickable</b>]</span>
    </p>
  </div>
</div>

<style>
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #url {
    text-decoration: none;
  }

  #url:hover {
    text-decoration: underline;
  }
</style>
