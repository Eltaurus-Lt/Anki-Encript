# Anki Encript
A set of tools for learning passwords using Anki without having to store them anywhere in the raw form. It includes an add-on to insert encrypted data into Anki Cards, and a JS script to check the correctness of typed answers. It can be used with stock Anki typing Cards or with any Cards using the [stock typing method](https://docs.ankiweb.net/templates/fields.html#checking-your-answer). There is also a dedicated Card Template, which can be imported from the `.apkg` file. It comes with additional features, such as concealing answers typed during reviews and adding hints displayed on hover, but otherwise remains minimalistic and lightweight to facilitate customization:

!["Encrypt" Cards](https://github.com/user-attachments/assets/bfd0365c-b8f6-4451-a8c8-0009838a9834)

on cursor hover:

!["Encrypt" Cards](https://github.com/user-attachments/assets/cfb48248-e76b-4b71-b22b-7037c5acb264)

The passwords are encrypted using the SHA-256 algorithm. It is [reasonably secure](https://en.wikipedia.org/wiki/Hash_function_security_summary), but (especially if passwords themselves are short, common, or otherwise weak) it is not 100% invulnerable. It is probably a good idea to only use this method for learning passwords to forums, web services, and other accounts that do not have sensitive information inside, but not for things like bank credentials or marketplaces with an attached credit card.
Because the passwords are not explicitly saved anywhere, the Cards will only show if the answer typed during the reviews is correct or not. They can't show where mistakes were made, as regular Anki typing Cards do, or otherwise remind you what the correct answer is. To make sure nothing essential will be lost, if a password is forgotten, it should be preserved with other methods outside Anki or be easily resettable. Setting all review intervals to the lowest values for the Deck with passwords will also help, keeping the retention as high as possible.

## Encrypting a password

- Put the cursor into the password Field in Anki Editor and click the `Encrypt` button

    ![the "Encrypt" button in Anki Editor](https://github.com/user-attachments/assets/9d828255-ae70-44d6-8ea1-19f4edd08edb)
- Enter the password into the appearing window and click `Ok`

    ![Password input window](https://github.com/user-attachments/assets/f84a2f24-d5db-44fc-9c05-ae28f46a767a)
- The hash for the password will be added to the Card's Field

    ![Encrypted password](https://github.com/user-attachments/assets/ed913d6e-e76a-4575-8763-bea855b1e4bb)


### known issues
The Encrypt button does not work from the Editor window used for creating new cards — only from the Editor for browsing existing Cards.
