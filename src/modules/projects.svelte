<script lang="ts">
    import projects from "../assets/projects.json";
</script>

<h1>PROJECTS</h1>

{#each projects as project}
    <div class="project">
        <h1>{project.title}</h1>
        <p id="description">{project.description}</p>
        <p id="uses"><i>{project.uses}</i></p>
    </div>
{/each}

<style>
    * {
        margin: 0% 10% 0% 10%;
        word-wrap: break-word;
    }

    h1 {
        font-size: 35px;
        color: #fff;
    }

    #description {
        font-size: 25px;
        color: #fff;
    }

    #uses {
        font-size: 20px;
        color: #fff;
        color: cyan;
    }

    .project {
        margin: 50px 0px 50px 0px;
    }

    @media screen and (max-width: 1024px) {
        * {
            margin: 0% 3% 0% 3%;
        }
    }
</style>
