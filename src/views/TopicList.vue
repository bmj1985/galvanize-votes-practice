<template>
    <div class="topic-list">
        <ul>
            <li v-for="topic in topics">
                <lesson-topic :topic="topic"></lesson-topic>
            </li>
        </ul>
    </div>
</template>

<script>
import LessonTopic from "@/components/LessonTopic.vue"

export default {
    name: "TopicsList",
    components: {
        LessonTopic
    },
    created(){
        this.$store.dispatch("listTopics");
    },
    computed: {
        topics(){
            return this.$store.state.topics;
        }
    }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/_colors";
    @import "~@/styles/_typography";

    .topic-list {
        padding: 1rem;
        ul {
            li {
                margin-bottom: 1rem;
            }
        }
    }
</style>
