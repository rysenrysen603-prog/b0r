function time_bc(){
    var dnow = new Date()
    var dbac = new Date("Wed Jun 02 2027 08:00:00 GMT+0100 (Central European Time)");
    var dif = dbac- dnow
    document.getElementById('dday').innerHTML = parseInt(dif/ (1000 * 60 * 60 * 24));
    document.getElementById('hhour').innerHTML = parseInt(dif% (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById('mminute').innerHTML = parseInt(dif% (1000 * 60 * 60) / (1000 * 60));
    document.getElementById('ssecond').innerHTML = parseInt(dif% (1000 * 60) / 1000);
setTimeout(time_bc,1000)
}

const SUPABASE_URL = "https://uzpzhnoegnunetadtxvk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_t2M0oLNFJ9T0tc4UKjIcyg_T7Yni32J";

async function rt() {
    const emailInput = document.getElementById('user-email').value;
    const notifyBtn = document.getElementById('notify-btn');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput)) {
        notifyBtn.innerText = "Waiting..";
        notifyBtn.disabled = true;

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({ email: emailInput })
            });

            if (response.ok) {
                notifyBtn.innerText = "Done! 🎉";
                document.getElementById('user-email').value = "";
                alert('You have been successfully registered!')
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error("سيرفر Supabase رفض الطلب:", errorData);
                notifyBtn.innerText = "Try again!";
                notifyBtn.disabled = false;
                alert("An error occurred on the server or email address already registered!");
            }
        } catch (err) {
            console.error("Internet connection error:", err);
            notifyBtn.innerText = "Try again!";
            notifyBtn.disabled = false;
            alert("Connection error! Check your internet connection.");
        }
    } else {
        alert("Please enter a valid email!");
    }
}