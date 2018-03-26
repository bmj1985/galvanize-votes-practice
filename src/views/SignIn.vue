<template>
    <div class="sign-in">
        <header>
            <img src="https://www.skidmore.edu/vote/images/vote.jpg" alt="Votes logo" />
            <h1>Galvanize Votes</h1>
        </header>
        <main>
        <p>The future home of Galvanize Votes</p>
        <p><router-link :to="{name: 'topicList'}">Go to topics</router-link></p>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
//    import HelloWorld from "@/components/HelloWorld.vue"

export default {
    name: "signIn",
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/_colors";
    @import "~@/styles/_typography";

    .sign-in {
        @include base-font;
        header {
            margin: 2rem 0;
            text-align: center;
            h1 {
                @include primary-header-font;
                text-align: center;
            }
            img {
                max-width: 320px;
                margin-bottom: 2rem;
            }
        }
        main {
            p {
                text-align: center;
            }
        }
    }
</style>
