function encodeFormData(data: FormDataType): string {
    const encodedData = new URLSearchParams();
    Object.keys(data).forEach((key) => {
        encodedData.append(key, data[key as keyof FormDataType]);
    });
    return encodedData.toString();
};

export const sendPostRequest = async (data: FormDataType): Promise<string> => {
    try {
        const encodedData = encodeFormData(data);
        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL!,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encodedData,
            }
        );
        const result = await response.json();
        return result.body;
    } catch (error) {
        return 'An error occurred. Please try again.';
    }
}
