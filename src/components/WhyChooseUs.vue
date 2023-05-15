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
    
</script>

<style scoped>

</style>