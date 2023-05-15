<template>
    <div class="bg-kampala-primary-light my-20">
        <div class="max-w-6xl mx-auto py-24 text-kampala-gray bg-kampala-primary-light">
            <div class="text-center pb-20">
                <div class="font-semibold text-5xl">Why Choose Us</div>
                <div class="pt-2 font-semibold">Some reasons</div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div class="flex space-x-2" v-for="x in result" :key="x.id">
                    <div class="text-sm">0{{ x.id }}</div>
                    <div class="w-32 h-0.5 bg-gray-400 mt-4"></div>
                    <div>
                        <div class=" font-semibold">{{x.title}}</div>
                        <div class="text-sm">
                            {{x.text}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            result: [
                {id: 1, title: "High Quality Groceries", text:"We offer  only the best products for our customers, our produce are always fresh and locally sourced and we carry a wide range of organic and natural products to meet all your dietary needs."},
                {id:2, title: "WIde range of products", text:"We offer a wide range of pantry, staples, household essentials and specialty items to meet all of your grocery needs. We have something for everyone."},
                {id:3, title: "Great customer service", text: "Our friendly and knowledgeable staff are always ready to help you find what you need and answer all your questions. W e believe in treating our customers like family."},
                {id:4, title: "Competitive prices", text:"We understand that grocery shopping can be expensive which is why we strive to keep our prices affordable, you will find that out prices are often lower than that of our competitors."},
                {id:5, title: "Swift delivery", text:"Our Delivery personnel are trained to handle packages with care, ensuring that they are delivered in good condition and in time. Our tracking systems allows clients to monitor the progress of their shipments."},
                {id:6, title: "Conveninet online ordering", text: "For those times when you can not make it to the store, you can shop from the comfort of your home and have them delivered to your doorstep."}
            ]
        }
    }
}
</script>

<style scoped>

</style>