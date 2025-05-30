class T1 {}
class T2 extends T1 {}
class T3 extends T2 {}
class T4 extends T3 {}

class A<T extends T1> {
	void fun(T x) {
		System.out.println(1);
	}
	<T extends T3> void fun(T x) { 
		System.out.println(2);
	}
}

public class Main {
  public static void main(String[] args) {
    A<T1> a = new A<>();
    a.fun(new T2());
    a.fun(new T3());
    a.fun(new T4());
  }
}
