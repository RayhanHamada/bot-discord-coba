namespace NodeJS {
    interface Process {
        env: {
            DISCORD_BOT_TOKEN: string
            [key: string]: string
        }
    }
}