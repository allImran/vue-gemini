import { useAi } from "./useAi"
import { ref } from 'vue'
export const useTextOutput = () => {
    const reply = ref('')
    const prompt = ref('')
    const isLoading = ref(false)
    const { model } = useAi()
    const submit = async () => {
        const result = await model.generateContent(prompt.value);
        const response = await result.response;
        reply.value = response.text();
        prompt.value = ''
    }
    return {
        reply,
        prompt,
        submit,
        isLoading
    }
}
