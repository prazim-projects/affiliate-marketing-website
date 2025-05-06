<script setup>

</script>


<template>
    <main class="Home-page container-fluid">
        <h2>Home</h2>
        <section class="about">
            <h2>Why Join Us?</h2>
            <p>Discover a wide range of products, earn commissions, and grow your business with ease.</p>
        </section>
        
        <section class="banner editable-banner">
            <h2>Featured Products</h2>
            <p>This banner is editable. Add your own promotional text here!</p>
        </section>
        
        <section class="social-media">
            <h2>Follow Us</h2>
            <div class="social-icons">
                <a href="#" class="social-link facebook">Facebook</a>
                <a href="#" class="social-link twitter">Twitter</a>
                <a href="#" class="social-link instagram">Instagram</a>
                <a href="#" class="social-link linkedin">LinkedIn</a>
            </div>
        </section>
        
        <section class="customer-service">
            <h2>Customer Service</h2>
            <p>If you have any questions, feel free to reach out to us:</p>
            <ul>
                <li>Email: <a href="mailto:support@affiliatemarketing.com">support@affiliatemarketing.com</a></li>
                <li>Phone: +251 96565 5481</li>
                <li>Live Chat: <a href="#">Start Chat</a></li>
            </ul>
        </section>
    </main>
<div class="container id-contain">
    <div id="ads">
        <p><em> Ads</em></p>
        <p><em> Ads</em></p>
        <p><em> Ads</em></p>
    </div>
</div>
</template>

<style lang="scss" scoped>
    .id-contain{
        display: flex;
        flex-direction: column;

        #ads{
            width: 200px;
            height: 800px;
            background-color: #4b949c;

            p{
                color:#066d75;
                text-shadow: 20cap;
                text-size-adjust: 50px;
                
            }
        }
    }
</style>
