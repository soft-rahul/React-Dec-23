# React key attribute: best practices for performant lists

## How does React key attribute work

First of all, before jumping into coding, let’s figure out the theory: what the “key” attribute is and why React needs it.

In short, if the “key” attribute is present, React uses it as a way to identify an element of the same type among its siblings during re-renders

## A simplified algorithm of the process during re-render looks like this:

* first, React will generate the “before” and “after” “snapshots” of the elements
* second, it will try to identify those elements that already existed on the page, so that it can re-use them instead of creating them from scratch 
- if the “key” attribute exists, it will assume that items with the same “before” and “after” key are the same
- if the “key” attribute doesn’t exist, it will just use sibling’s indexes as the default “key”
- third, it will:
-- get rid of the items that existed in the “before” phase, but don’t exist in the “after” (i.e. unmount them)
-- create from scratch items that haven’t existed in the “before” variant (i.e. mount them)
-- update items that existed “before” and continue to exist “after” (i.e. re-render them)

# Why random “key” attributes are a bad idea?