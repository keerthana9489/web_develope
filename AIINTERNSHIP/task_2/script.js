// Check if Notifications are supported
if ('Notification' in window) {
    let notificationEnabled = false;

    // Function to show notifications
    function showNotification(message) {
        if (notificationEnabled) {
            // Check if user has granted permission
            if (Notification.permission === "granted") {
                new Notification(message);
            }
        }
    }

    // Request permission for notifications
    function requestNotificationPermission() {
        if (Notification.permission === "default") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                } else {
                    console.log("Notification permission denied.");
                }
            });
        }
    }

    // Enable notifications
    document.getElementById("enable-notifications-btn").addEventListener("click", function() {
        notificationEnabled = true;
        requestNotificationPermission();
    });

    // Disable notifications
    document.getElementById("disable-notifications-btn").addEventListener("click", function() {
        notificationEnabled = false;
        console.log("Notifications disabled.");
    });

    // Toggle notifications in profile page
    const notificationToggle = document.getElementById("notification-toggle");

    // Restore user preference for notifications
    notificationToggle.checked = notificationEnabled;

    notificationToggle.addEventListener("change", function() {
        notificationEnabled = notificationToggle.checked;
        if (notificationEnabled) {
            requestNotificationPermission();
        }
    });

    // Example of when a user answers or upvotes a question (simulated here)
    setTimeout(function() {
        showNotification("Someone answered your question!");
    }, 5000);

    setTimeout(function() {
        showNotification("Someone upvoted your question!");
    }, 10000);
} else {
    alert("Notifications are not supported in this browser.");
}
