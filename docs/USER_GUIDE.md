# Everyday Household Guide: Mi-Light Remote Studio for Home Assistant

A plain-English guide to connecting your Mi-Light / MiBoxer remotes and wall panels to Home Assistant so anyone in the household can press a familiar button on a 2xAAA remote or wall switch—no phone app or voice commands needed.

## Why Physical Buttons Help Everyone at Home
* **Simple and dependable:** Guests, kids, and older relatives don't need Home Assistant mobile access or voice prompts to turn on a lamp, adjust warmth, or run a routine.
* **Visual setup, no YAML required:** Link buttons to Home Assistant lights, switches, scenes, fans, or covers visually, and test actions right away.
* **Child & safety lock support:** Pairs with Hub idle-timeout child lock settings so accidental presses after idle time don't trigger unexpected automations until unlocked.

## Getting Started
1. Install **Mi-Light Remote Studio** in Home Assistant and restart Home Assistant if prompted.
2. Add the integration under **Settings -> Devices & Services -> Add Integration** and connect it to your Mi-Light Hub and MQTT broker.
3. Open **Mi-Light Remote Studio**, select your remote or wall panel, and use the visual mapper to assign clear actions to taps, holds, or segments—then click **Test** to verify before someone relies on it day to day.
4. For flat wall panels and round touch pucks, use the stencil editor and 100% scale print check (`10 mm x 10 mm` ruler check) to label buttons in plain English or clear icons.

---

## Printable 1-Page Household Button Cheat Sheet

Print this section at **100% actual scale** (A4 or Letter) and keep it handy for family, guests, and anyone who prefers simple physical buttons over a phone or voice assistant.

| Remote / Panel | Room / Area | Single Tap | Long Hold | Multi-Tap (2x / 3x) | Unlock Code (if Child Locked) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Main Remote* | *Living / Kitchen* | *Lights ON / OFF* | *Hold OFF = All Off* | *2x = Relax / 3x = Bright* | *ON -> OFF -> ON* |
| *Wall Panel* | *Hallway / Entry* | *Zone / Switch toggle* | *Hold = Night / Off* | *2x = Scene* | *1 -> 2 -> 3 or ON -> OFF -> ON* |
| *Touch Puck* | *Bedroom / Study* | *Power / Dim / CCT* | *Hold = Sleep / Off* | *Optional shortcut* | *ON -> OFF -> ON* |

### Quick Notes
* **Single Stick-On Stencils:** Fit the **30 flat glass wall panels and flat circular touch pucks** (verify the **10 mm x 10 mm** scale box at 100% print scale); knobs, LCDs, rockers, and physical pushbuttons are held for individual cut stickers later.
* **Child Lock:** Prevents accidental triggers after idle time until the 3-tap unlock sequence is entered.
