<script lang="ts">
  import About from "./modules/about.svelte";
  import Links from "./modules/links.svelte";
  import Projects from "./modules/projects.svelte";
</script>

<main>
  <About />
  <Links />
  <Projects />
</main>

<style>
  :root {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #24283b;
    text-align: center;
  }
</style>
