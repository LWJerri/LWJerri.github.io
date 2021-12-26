<script lang="ts">
  import logo from "../assets/logo.png";
  import data from "../assets/data.json";
</script>

<svelte:head>
  <title>Andrey Zontov &#149; Main</title>
</svelte:head>

<div class="main">
  <div class="box">
    <img src={logo} alt="AVATAR" />
    <h1 id="name">Andrey Zontov</h1>
    <p id="about">Backend Node.js developer</p>
  </div>

  <div class="box">
    <h1 class="title">Contacts</h1>

    {#each data.contacts as contact}
      <a id="link" href={contact.link} target="_blank"><i class={contact.icon} /></a>
    {/each}
  </div>

  <div class="box">
    <h1 class="title">Projects</h1>

    {#each data.projects as project}
      <div class="project">
        <h1>
          {project.name}
        </h1>

        {#each project.links as link}
          {@html `<a href=${link} target="_blank" style="color: #22B8CF; font-size: 1.875rem; margin: 0px 5px 0px 5px"><i class="fas fa-link"></i></a>`}
        {/each}

        <article>
          <p>{project.description}</p>
          <h3><i>{project.tools.join(", ")}</i></h3>
        </article>
      </div>
    {/each}
  </div>
</div>

<style>
  * {
    color: white;
    text-align: center;
    word-break: normal;
  }

  .main {
    margin: 1.875rem 9.375rem 1.875rem 9.375rem;
  }

  @media screen and (max-width: 64rem) {
    .main {
      margin: 1.875rem 5rem 1.875rem 5rem;
    }
  }

  @media screen and (max-width: 48rem) {
    .main {
      margin: 1.875rem 1.25rem 1.875rem 1.25rem;
    }
  }

  @media screen and (max-width: 26.563rem) {
    .main {
      margin: 1.875rem 0.313rem 1.875rem 0.313rem;
    }

    .box img {
      display: none;
    }
  }

  .box {
    margin: 1.875rem 0rem 1.875rem 0rem;
  }

  .box img {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 16rem;
    height: 16rem;
  }

  .box h1 {
    font-size: 2.813rem;
  }

  .box #name {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 3.125rem;
    outline: none;
  }

  .box #about {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 2.188rem;
  }

  .box #link {
    margin: 0rem 0.313rem 0rem 0.313rem;
  }

  .box #link:hover {
    opacity: 0.7;
  }

  .project {
    margin-top: 2.188rem;
  }

  .project h1 {
    color: #22b8cf;
  }

  .project article h3 {
    font-size: 1.25rem;
    margin-top: 0.625rem;
  }

  .project article p {
    font-size: 1.75rem;
  }

  .title {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 0.938rem;
  }
</style>
