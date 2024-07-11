<script setup lang="ts">
import { useFileUpload } from '@/services/useFileUpload'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const {reply, prompt, submit, handleFileChange, isLoading } = useFileUpload()
</script>

<template>
    <div class="space-y-5">
        <Input @change="handleFileChange" id="picture" type="file" />
        <Textarea placeholder="What do you want to know?" v-model="prompt"/>
        <Button
            :class="{ 'opacity-50 cursor-not-allowed': isLoading}"
            @click="submit"
        >Submit</Button>

        <p>{{ reply }}</p>
    </div>
</template>