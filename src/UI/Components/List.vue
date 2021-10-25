<template>
<div class="task-list">
    <div
        v-if="isLoading"
        class="loading"
    >Loading...</div>
    <div
        v-else
        v-for="task in tasks.data"
        class="task"
    >
        <div>{{task.title}}</div>
    </div>
</div>
</template>
<script lang="ts">
import IControllers from '../../app/interfaces/Factory/IControllers';
import GetTasksController from '../../app/task/controllers/GetTasksController';
import { TVueResponse } from "../../app/interfaces/DTOs/TVueResponse";
import { TaskObject } from "../../app/interfaces/DTOs/TaskList/TaskLIstResponses";

import { reactive, inject } from 'vue';

export default {
    name: 'List',

    setup() {
        const factory = inject('controllers') as IControllers;
        const controller = factory.get('products/listController') as GetTasksController;
        const tasks  = reactive<TVueResponse<TaskObject>>({});

        controller.execute({}, tasks);

        return {
            tasks,
        };
    },

    computed: {
        isLoading() {
            return this.tasks.error || !(this.tasks.data && Object.keys(this.tasks.data));
        }
    }
}
</script>
