<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
</script>

<Router>
  <main>
    <Route component={Main} />
  </main>
</Router>
