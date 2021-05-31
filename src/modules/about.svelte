<script lang="ts">
    import logo from "../assets/logo.png";
</script>

<div class="about">
    <img src={logo} alt="MY_AVATAR" />
    <h1>Andrey Zontov</h1>
    <p>Back-end Node.js developer from Kiev</p>
</div>

<style>
    h1 {
        font-size: 45px;
        color: #fff;
    }

    p {
        font-size: 25px;
        color: #fff;
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
    }
</style>
