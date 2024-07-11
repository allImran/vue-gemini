<script setup lang="ts">
import { useStreamedOutput } from '@/services/useStreamedOutput'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const {reply, prompt, submit, isLoading } = useStreamedOutput()
</script>

<template>
    <div class="space-y-5">
        <Textarea placeholder="What do you want to know?" v-model="prompt"/>
        <Button
            :class="{ 'opacity-50 cursor-not-allowed': isLoading}"
            @click="submit"
        >Submit</Button>

        <p>{{ reply }}</p>
    </div>
</template>