
// DO NOT EDIT THIS FILE - it is machine generated -*- c++ -*-

#ifndef __gnu_java_nio_VMChannelOwner__
#define __gnu_java_nio_VMChannelOwner__

#pragma interface

#include <java/lang/Object.h>
extern "Java"
{
  namespace gnu
  {
    namespace java
    {
      namespace nio
      {
          class VMChannel;
          class VMChannelOwner;
      }
    }
  }
}

class gnu::java::nio::VMChannelOwner : public ::java::lang::Object
{

public:
  virtual ::gnu::java::nio::VMChannel * getVMChannel() = 0;
  static ::java::lang::Class class$;
} __attribute__ ((java_interface));

#endif // __gnu_java_nio_VMChannelOwner__
