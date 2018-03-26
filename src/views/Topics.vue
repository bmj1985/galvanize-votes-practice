<template>
    <div class="topics">
        <header>
            <h1>Galvanize Votes</h1>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "Topics",
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/_colors";
    @import "~@/styles/_typography";

    .topics {
        header {
            padding: 1rem;
            background-color: $dark-color;
            color: $white;
            @include primary-header-font;
        }
    }
</style>
