def ip_address(address):
    new_address = ""
    split_address = address.split(".")
    separator = "[.]"
    new_address = separator.join(split_address)
    return new_address


def take_input():
    name = input("Enter your IP Address: ")
    return name


address = take_input()
new_address = ip_address(address)
print(new_address)
