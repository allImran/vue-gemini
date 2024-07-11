<script setup lang="ts">
import { useTextOutput } from '@/services/useTextOutput'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const {reply, prompt, submit, isLoading } = useTextOutput()
</script>

<template>
    <div class="space-y-5">
        <Textarea placeholder="What do you want to know?" v-model="prompt"/>
        <Button
            @click="submit"
            :class="{ 'opacity-50 cursor-not-allowed': isLoading}"
        >Submit</Button>

        <p>{{ reply }}</p>
    </div>
</template>