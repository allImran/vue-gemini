<script setup lang="ts">
import { useImageCompare } from '@/services/useImageCompare'
//ui
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const { reply, prompt, submit, handleFileChange, isLoading, images } = useImageCompare()
</script>

<template>
    <div class="space-y-5">
        <Input @change="handleFileChange" id="picture" type="file" />
        <div class="space-x-5">
            <Badge v-for="(_, index) in images">
                image {{ index + 1 }}
            </Badge>
        </div>
        <Textarea placeholder="What do you want to know?" v-model="prompt" />
        <Button @click="submit" :class="{ 'opacity-50 cursor-not-allowed': isLoading }">Submit</Button>
        <p>{{ reply }}</p>
    </div>
</template>
<script setup lang="ts">
</script>