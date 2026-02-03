import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { source, ...fields } = data;

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            console.error("DISCORD_WEBHOOK_URL is not defined");
            return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
        }

        // Format the message for Discord
        const embed = {
            title: `New Lead from ${source || 'Website'}`,
            color: source === 'Lead Popup' ? 3447003 : 15105570, // Blue for popup, Orange for contact page
            fields: Object.entries(fields).map(([key, value]) => ({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                value: value ? value.toString() : 'N/A',
                inline: true
            })),
            timestamp: new Date().toISOString(),
            footer: {
                text: "Unpolished Media Lead Engine"
            }
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [embed]
            }),
        });

        if (!response.ok) {
            throw new Error(`Discord API responded with ${response.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending to Discord:", error);
        return NextResponse.json({ error: "Failed to send lead" }, { status: 500 });
    }
}
