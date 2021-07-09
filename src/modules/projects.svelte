<script lang="ts">
  import projects from "../assets/projects.json";
  import { faBookmark } from "@fortawesome/free-regular-svg-icons";

  const Bookmark = `<i class='${faBookmark.prefix} fa-${faBookmark.iconName} fa-xs'></i>`;
</script>

<h1>PROJECTS</h1>

{#each projects as project}
  <div class="project">
    <h1>
      {project.title}
      {@html project.url ? "<a style='color: #5865F2' href=" + project.url + " target='_blank'>" + Bookmark + "</a>" : ""}
    </h1>
    <p id="description">{project.description}</p>
    <p id="uses"><i>{project.uses.join(", ")}</i></p>
  </div>
{/each}

<style>
  h1 {
    font-size: 2.1875rem;
    color: white;
  }

  #description {
    word-wrap: break-word;
    font-size: 1.5625rem;
    color: white;
  }

  #uses {
    font-size: 1.25rem;
    color: cyan;
  }

  .project {
    margin: 3.125rem 10% 3.125rem 10%;
  }

  @media screen and (max-width: 64rem) {
    #description {
      margin: 0% 3% 0% 3%;
    }
  }
</style>
