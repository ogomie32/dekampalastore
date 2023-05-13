<template>
    <div class="bg-kampala-primary-light h-screen w-full">
        <div class="flex items-center justify-center h-screen">
            <div class="mx-auto max-w-xl pt-2">
                <div class="flex items-center justify-center"><img src="../assets/images/main-logo.png" alt="Main Logo"></div>
                <div class="mb-4 text-center">
                    <div class="font-bold text-3xl mt-2">User Login</div>
                    <div class="text-sm">Input your details and dive into our premium quality groceries and supermarket</div>
                </div>
                <div class="bg-white p-4 mb-5">
                    <div class="mb-4">
                        <label for="email" class="font-semibold">Email or phone number</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email" 
                            placeholder="Enter email or phone number" 
                            class="block w-full mt-1 border border-gray-300 text-lg form-input font-medium py-3 px-3 shadow-sm focus:border-kampala-primary focus:outline-none focus:ring-kampala-primary sm:text-sm">
                    </div>
                    <div>
                        <label for="password" class="font-semibold">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            id="password" 
                            placeholder="Enter password" 
                            class="block w-full mt-1 border border-gray-300 text-lg form-input font-medium py-3 px-3 shadow-sm focus:border-kampala-primary focus:outline-none focus:ring-kampala-primary sm:text-sm">
                    </div>
                    <div class="mb-8">Forgot password?</div>
                    <div @click="$router.push('/')">
                        <button  class="bg-kampala-primary text-white font-semibold w-full py-3 hover:text-kampala-primary-light">Log In</button>
                    </div>
                </div>
                <div>
                    <button class="bg-kampala-blue text-white font-semibold w-full py-3">Log In with Facebook</button>
                    <div class="text-sm text-center">
                        <div>Need further support or assistance? Visit our <span class="text-kampala-primary cursor-pointer">Help Centre</span> </div>
                        <div>or contact our <span  class="text-kampala-primary cursor-pointer">Customer Service Team</span> </div>
                    </div>
                    <div class="text-sm text-center mt-5">Don't have an account?<span class="text-kampala-primary cursor-pointer" @click="$router.push('/register')">Sign Up</span> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  
</script>

<style scoped>

</style>