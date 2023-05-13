<template>
    <div class="bg-kampala-primary-light h-screen w-full">
        <div class="flex items-center justify-center h-screen">
            <div class="mx-auto max-w-xl">
                <div class="mb-4 text-center text-sm">
                    <div class="font-semibold text-3xl mb-2">Create your account</div>
                    <div>Let’s get started by creating your account</div>
                    <div>Remember that to keep your account safe, a strong password is needed</div>
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
                    <div>
                        <label for="password" class="font-semibold">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            id="password" 
                            placeholder="Enter password" 
                            class="block w-full mt-1 border border-gray-300 text-lg form-input font-medium py-3 px-3 shadow-sm focus:border-kampala-primary focus:outline-none focus:ring-kampala-primary sm:text-sm">
                    </div>
                    <div class="mt-12">
                        <button class="bg-kampala-primary text-white font-semibold w-full py-3 hover:text-kampala-primary-light">Sign up</button>
                    </div>
                </div>
                <div>
                    <div class="text-sm text-center">
                        <div>Need further support or assistance? Visit our <span class="text-kampala-primary">Help Centre</span> </div>
                        <div>or contact our <span  class="text-kampala-primary">Customer Service Team</span> </div>
                    </div>
                    <div class="text-sm text-center mt-5">Already have an account?<span class="text-kampala-primary cursor-pointer" @click="$router.push('/login')">Sign In</span> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>