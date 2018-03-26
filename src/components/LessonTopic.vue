<template>
    <div class="lesson-topic">
        <header>
            <h2>{{topic.title}}</h2>
        </header>
        <main></main>
    </div>
</template>

<script>
export default {
    name: "LessonTopic",
    props: {
        topic: Object
    }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/_colors";
    @import "~@/styles/_typography";

    .lesson-topic {
        box-shadow: 0 2px 10px $medium-grey;
        padding: 1rem;
        max-width: 30rem;
        h2 {
            @include secondary-header-font;
        }
        main {
            min-height: 3rem;
        }
    }
</style>
