
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __javax_swing_text_html_HTMLFrameHyperlinkEvent__
#define __javax_swing_text_html_HTMLFrameHyperlinkEvent__

#pragma interface

#include <javax/swing/event/HyperlinkEvent.h>
extern "Java"
{
  namespace java
  {
    namespace net
    {
        class URL;
    }
  }
  namespace javax
  {
    namespace swing
    {
      namespace event
      {
          class HyperlinkEvent$EventType;
      }
      namespace text
      {
          class Element;
        namespace html
        {
            class HTMLFrameHyperlinkEvent;
        }
      }
    }
  }
}

class javax::swing::text::html::HTMLFrameHyperlinkEvent : public ::javax::swing::event::HyperlinkEvent
{

public:
  HTMLFrameHyperlinkEvent(::java::lang::Object *, ::javax::swing::event::HyperlinkEvent$EventType *, ::java::net::URL *, ::javax::swing::text::Element *, ::java::lang::String *);
  HTMLFrameHyperlinkEvent(::java::lang::Object *, ::javax::swing::event::HyperlinkEvent$EventType *, ::java::net::URL *, ::java::lang::String *);
  HTMLFrameHyperlinkEvent(::java::lang::Object *, ::javax::swing::event::HyperlinkEvent$EventType *, ::java::net::URL *, ::java::lang::String *, ::javax::swing::text::Element *, ::java::lang::String *);
  HTMLFrameHyperlinkEvent(::java::lang::Object *, ::javax::swing::event::HyperlinkEvent$EventType *, ::java::net::URL *, ::java::lang::String *, ::java::lang::String *);
  virtual ::java::lang::String * getTarget();
private:
  ::java::lang::String * __attribute__((aligned(__alignof__( ::javax::swing::event::HyperlinkEvent)))) target_frame;
public:
  static ::java::lang::Class class$;
};

#endif // __javax_swing_text_html_HTMLFrameHyperlinkEvent__
