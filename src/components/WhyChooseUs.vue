<template>
    <div class="bg-kampala-primary-light my-20">
        <div class="max-w-6xl mx-auto py-24 text-kampala-gray bg-kampala-primary-light">
            <div class="text-center pb-20">
                <div class="font-semibold text-5xl">Why Choose Us</div>
                <div class="pt-2 font-semibold">Some reasons</div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div class="flex space-x-2" v-for="x in 6" :key="x">
                    <div class="text-sm">01</div>
                    <div class="w-32 h-0.5 bg-gray-400 mt-4"></div>
                    <div>
                        <div class=" font-semibold">High Quality Groceries</div>
                        <div class="text-sm">
                            We offer  only the best products for our customers, 
                            our produce are always fresh and locally sourced and 
                            we carry a wide range of organic and natural products 
                            to meet all your dietary needs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const data = [
        {id: 01, title: "High Quality Groceries", text:"We offer  only the best products for our customers, our produce are always fresh and locally sourced and we carry a wide range of organic and natural products to meet all your dietary needs."},
        {id:02, title: "WIde range of products", text:"We offer a wide range of pantry, staples, household essentials and specialty items to meet all of your grocery needs. We have something for everyone."},
        {id:03, title: "Great customer service", text: "Our friendly and knowledgeable staff are always ready to help you find what you need and answer all your questions. W e believe in treating our customers like family."},
        {id:04, title: "Competitive prices", text:"We understand that grocery shopping can be expensive which is why we strive to keep our prices affordable, you will find that out prices are often lower than that of our competitors."},
        {id:05, title: "Swift delivery", text:"Our Delivery personnel are trained to handle packages with care, ensuring that they are delivered in good condition and in time. Our tracking systems allows clients to monitor the progress of their shipments."},
        {}
    ]
</script>

<style scoped>

</style>