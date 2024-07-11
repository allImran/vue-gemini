import { useAi } from "./useAi"
import { ref } from 'vue'
export const useStreamedOutput = () => {
    const reply = ref('')
    const prompt = ref('')
    const isLoading = ref(false)
    const { model } = useAi()
    const submit = async () => {
        isLoading.value = true
        const result = await model.generateContentStream(prompt.value);
        reply.value = ''
        
        for await (const chunk of result.stream) {
            const chunkTest = chunk.text()
            reply.value += chunkTest
        }
       
        prompt.value = ''
        isLoading.value = false
    }
    return {
        reply,
        prompt,
        submit,
        isLoading
    }
}
