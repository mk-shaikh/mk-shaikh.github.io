# Video drop-in guide

Drop generated clips into this folder with these exact filenames.
Each clip lights up automatically — no code changes. A missing clip
simply keeps the current illustration (nothing breaks).

| File | Screen | Loops | Notes |
|---|---|---|---|
| `welcome.mp4` | 0.1 Welcome | no | Replaces hero image. Ends on Amara facing camera |
| `kit-up.mp4` | 1.3 Principle | no | Amara dons vest → pass → radio → water |
| `gate3-queue.mp4` | 2.1 Radio cold open | yes | Ambient: queue building, steward's-eye view |
| `spectator.mp4` | 3.1 Complaint | no | Frustrated spectator delivers his line |
| `kiosk-slip.mp4` | 5.1 Incident | no | Replaces the 4-panel slip sequence |
| `corridor.mp4` | 6.1 Phone moment | no | Replaces corridor illustration |
| `shift-start.mp4` | 7.0 Simulation | yes | Ambient sting: gates, radios, crowd noise |
| `certified.mp4` | 8.3 Certificate | yes | Amara celebration |

Captions: matching WebVTT per clip in `../captions/<same-name>.vtt`
(`welcome.vtt` already written). CC defaults ON; learner can toggle.

Format: 16:9, 8s, H.264 MP4, 720p is plenty (course column is 480–920px).
Videos autoplay muted (browser rule) with a tap-for-sound control.
`prefers-reduced-motion` users get manual controls instead of autoplay.
