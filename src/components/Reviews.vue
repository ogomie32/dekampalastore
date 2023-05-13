<template>
    <div class="max-w-6xl mx-auto py-48 text-kampala-gray">
        <div>
            <div class="text-center font-semibold text-5xl pb-20">Customer Reviews & Ratings</div>
            <div class="flex justify-between w-full">
                <div class="text-center font-semibold w-1/4">
                    <div class="flex items-center justify-center"><img src="../assets/images/pix-3.png" alt="Picture 1"></div>
                    <div>
                        “I absolutely love Kampala store. The prices are reasonable and 
                        the selection is fantastic, i can always find everything i need”.
                    </div>
                    <div class="font-bold py-5">Bimbo Adesanya</div>
                    <div class="flex items-center justify-center">
                        <div v-for="x in 5" :key="x">
                            <img src="../assets/images/svgs/star_rate.svg" alt="Stars">
                        </div>
                        <div>(120)</div>
                    </div>
                </div>
                <div class="text-center font-semibold w-1/4">
                    <div class="flex items-center justify-center"><img src="../assets/images/pix-2.png" alt="Picture 2"></div>
                    <div>
                        “The staff are friendly and helpful and i appreciate that they are always willing 
                        to answer any question i have”.
                    </div>
                    <div class="font-bold py-5">Ahmed Garuba</div>
                    <div class="flex items-center justify-center">
                        <div v-for="x in 5" :key="x">
                            <img src="../assets/images/svgs/star_rate.svg" alt="Stars">
                        </div>
                        <div>(120)</div>
                    </div>
                </div>
                <div class="text-center font-semibold w-1/4">
                    <div class="flex items-center justify-center"><img src="../assets/images/pix-1.png" alt="Picture 3"></div>
                    <div>
                        “Every time i shop here, the fruits and vegetables are always fresh and delicious. 
                        I recommend this grocery store to any one looking for a great shopping experience”.
                    </div>
                    <div class="font-bold py-5">Ngozi Eze</div>
                    <div class="flex items-center justify-center">
                        <div v-for="x in 5" :key="x">
                            <img src="../assets/images/svgs/star_rate.svg" alt="Stars">
                        </div>
                        <div>(120)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>

</style>