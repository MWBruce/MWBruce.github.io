document.addEventListener('DOMContentLoaded', () => {
    const vueinst = new Vue({
        el: '#app',
        data: {
            name: 'A Software Engineer',
            jobTitle: 'Maxwell Bruce',
            typedTitle: '',
            currentIndex: 0,
            isDeleting: false,
            isTransitioning: false,
            showIntroduction: true,
            showContactStatus: false,
            showAboutStatus: false,
            showProjectStatus: false,
            saabShow: false,
            aimlShow: false,
            rjcShow: false
        },
        mounted() {
            this.typeWriter();
        },
        methods: {
            // Makes text on home page move
            typeWriter() {
                if (!this.isDeleting) {
                    if (this.typedTitle.includes("<br>")) {
                        this.typedTitle = this.typedTitle.replace("<br>", "");
                    }
                    if (this.currentIndex < this.name.length) {
                        this.typedTitle += this.name.charAt(this.currentIndex);
                        this.currentIndex++;
                        setTimeout(this.typeWriter, 100);
                    } else if (this.name === this.jobTitle) {
                        return;
                    } else {
                        setTimeout(() => {
                            this.isDeleting = true;
                            this.typeWriter();
                        }, 1000);
                    }
                } else {
                    if (this.currentIndex > 0) {
                        this.typedTitle = this.currentIndex === 1 ? "<br>" : this.typedTitle.slice(0, -1);
                        this.currentIndex--;
                        setTimeout(this.typeWriter, 100);
                    } else {
                        this.isDeleting = false;
                        this.name = this.jobTitle;
                        this.currentIndex = 0;
                        this.typeWriter();
                    }
                }
            },
            showContactInfo() {
                this.showIntroduction = false;
                this.showAboutStatus = false;
                this.showProjectStatus = false;
                this.showContactStatus = true;
                typedTitle = '';
            },
            showAboutInfo() {
                this.showIntroduction = false;
                this.showContactStatus = false;
                this.showProjectStatus = false;
                this.showAboutStatus = true;
                typedTitle = '';
            },
            showProjectInfo() {
                this.showIntroduction = false;
                this.showContactStatus = false;
                this.showAboutStatus = false;
                this.showProjectStatus = true;
                typedTitle = '';
            },
            showHomePage() {
                typedTitle = '';
                this.typeWriter();
                this.showContactStatus = false;
                this.showAboutStatus = false;
                this.showProjectStatus = false;
                this.showIntroduction = true;
            },
            saabShowButton() {
                event.preventDefault();
                this.saabShow = !this.saabShow;
            },
            aimlShowButton() {
                event.preventDefault();
                this.aimlShow = !this.aimlShow;
            },
            rjcShowButton() {
                event.preventDefault();
                this.rjcShow = !this.rjcShow;
            }
        }
    });
});
