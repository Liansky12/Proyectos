from pynput.keyboard import Key, KeyCode, Listener

KONAMI_CODE = [
    Key.up, Key.up, Key.down, Key.down,
    Key.left, Key.right, Key.left, Key.right,
    KeyCode.from_char("b"), KeyCode.from_char("a")
]

def on_press(key):
    print(key)

with Listener(on_press=on_press) as listener:
    listener.join()