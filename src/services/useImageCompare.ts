import { useAi } from "./useAi"
import { ref } from 'vue'
export const useImageCompare = () => {
    const reply = ref('')
    const prompt = ref('')
    const images = ref<any[]>([])
    const isLoading = ref(false)
    const { model } = useAi()

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                images.value?.push({
                    inlineData: {
                        data: e.target.result.split(',')[1],
                        mimeType: file.type
                    }
                })

                event.target.value = null
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a file.');
        }
    }
    const submit = async () => {
        isLoading.value = true
        const result = await model.generateContentStream(
            [prompt.value, ...images.value]
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
        images,
        handleFileChange
    }
}
