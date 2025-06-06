# Anki Encrypt

A toolkit for securely learning passwords with Anki, without exposing them to anyone accessing the flashcards. The toolkit includes [an add-on](https://ankiweb.net/shared/info/501789684) for inserting encrypted data into Anki Cards, and a [JS script](https://github.com/Eltaurus-Lt/Anki-Encrypt/blob/main/CheckAnswer.js) to check the correctness of typed answers. The script can be used with stock Anki typing Cards or with any Cards that use the [stock typing method](https://docs.ankiweb.net/templates/fields.html#checking-your-answer). There is also a dedicated Card Template (downloaded from [AnkiWeb](https://ankiweb.net/shared/info/956687415), or imported from the repository `.apkg` file), which comes with additional features, such as concealing answers typed during reviews and adding hints shown while hovering a cursor, but otherwise remains minimalistic and lightweight, to be customisable similarly to stock Anki Note Types:

![Typing and autocheck](https://github.com/user-attachments/assets/bfd0365c-b8f6-4451-a8c8-0009838a9834)

Temporarily revealing the hint and the typed answer on cursor hover:

![Revealing hint and the typed answer](https://github.com/user-attachments/assets/f7ce931a-aadb-4d6f-b67b-f7440bddf6dc)

The passwords are encrypted using the SHA-256 algorithm. It is [reasonably secure](https://en.wikipedia.org/wiki/Hash_function_security_summary), but (especially if passwords themselves are short, common, or otherwise weak) is not 100% invulnerable. It is probably a good idea to only use this method for learning passwords to forums, web services, and other accounts that do not have sensitive information attached, but not for things like bank credentials or marketplaces with saved credit card data.
Because the passwords are not explicitly saved anywhere, the Cards can only show whether the answer typed during the reviews is correct or not. By design, they cannot detail specific errors in submitted answers, as regular Anki typing Cards do, or otherwise remind you what the correct answer is. To make sure nothing essential will be lost, if a password is forgotten, it should be preserved with other methods outside Anki or be easily resettable. Setting the [Leech action](https://docs.ankiweb.net/leeches.html#leeches) to `Tag Only` and all review intervals to the lowest values in the password Deck options will also help by keeping the retention as high as possible.

## Add-on Installation

1. Select `Tools` in the top left menu of the desktop Anki app
2. Go to `Add-ons`
3. Click the `Get Add-ons` button
4. Paste "501789684" (the Add-on's [ID on AnkiWeb](https://ankiweb.net/shared/info/501789684))
5. Click `Ok`
6. Restart Anki

Alternatively, for manual installation, clone this repo into your `addons21` Anki folder

## Encrypting a password

1. Put the cursor into the password Field in Anki Editor and click the `Encrypt` button

    ![the "Encrypt" button in Anki Editor](https://github.com/user-attachments/assets/4d79482e-98d2-4173-b532-12ad935a375b)
2. Enter the password into the appearing window and click `Ok`

    ![Password input window](https://github.com/user-attachments/assets/c399c214-2437-4738-9251-8b712dc634fa)
3. The hash for the password will be added to the Card's Field

    ![Encrypted password](https://github.com/user-attachments/assets/ed913d6e-e76a-4575-8763-bea855b1e4bb)


### known issues
The Encrypt button does not work from the Editor window used for creating new cards — only from the Editor for browsing existing Cards.

## Copyright notice

Copyright © 2023-2025 Eltaurus

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

## Support

If you found this repository useful, please consider supporting the development by rating it on AnkiWeb:

<a href="https://ankiweb.net/shared/info/501789684" target="_blank"><img src="https://i.imgur.com/CoCMk2T.png" alt="Rate the Add-on on AnkiWeb"  style="height: 37px"></a>
