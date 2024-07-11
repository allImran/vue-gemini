import { useAi } from "./useAi"
import { ref } from 'vue'
export const useFileUpload = () => {
    const reply = ref('')
    const prompt = ref('')
    let base64 = ''
    const isLoading = ref(false)
    const { model } = useAi()

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                base64 = e.target.result.split(',')[1];
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a file.');
        }
    }
    const submit = async () => {
        isLoading.value = true
        const result = await model.generateContentStream(
            [prompt.value, { inlineData: { data: base64, mimeType: "image/png" } }]
        );
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
        isLoading,
        handleFileChange
    }
}
