<template>
    <div class="shadow-md py-2">
        <div class="flex items-center justify-between max-w-6xl mx-auto">
            <div><img src="../assets/images/main-logo.png" alt="Main Logo"></div>
            <div class="flex items-center text-kampala-primary font-semibold space-x-10">
                <div class="cursor-pointer">Home</div>
                <div class="cursor-pointer">Shop</div>
                <div class="cursor-pointer">About us</div>
                <div class="cursor-pointer">Contact Us</div>
            </div>
            <div class="flex items-center space-x-3 font-semibold">
                <button @click="$router.push('/register')" class="bg-kampala-primary text-white border border-kampala-primary text-sm rounded-md py-3 px-6">Sign up</button>
                <button @click="$router.push('/login')" class="text-kampala-primary border border-kampala-primary text-sm rounded-md py-3 px-6">Sign in</button>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>

</style>