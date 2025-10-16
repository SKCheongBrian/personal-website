public class ImmutableStack<T> {
	private T head;
	private ImmutableStack<T> tail;
	private static final ImmutableStack<?> EMPTY_STACK = new ImmutableStack<>(null, null);

	private ImmutableStack(T head, ImmutableStack<T> tail) {
		this.head = head;
		this.tail = tail;
	}

	public void push(T t) {
		this.tail = new ImmutableStack<T>(this.head, this.tail);
		this.head = t;
	}

	public void pop() {
		if (this.head == null) {
			throw new IllegalStateException("ImmutableStack is empty");
		}
		this.head = this.tail.head;
		this.tail = this.tail.tail;
	}

	public T head() {
		if (this.head == null) {
			throw new IllegalStateException("ImmutableStack is empty");
		}
		return head;
	}

	public boolean isEmpty() {
		if (this.head == null) {
			return true;
		}
		return false;
	}

	public static <T> ImmutableStack<T> createNew() {
		@SuppressWarnings("unchecked")
		ImmutableStack<T> emptyImmutableStack = (ImmutableStack<T>) EMPTY_STACK;
		return emptyImmutableStack;
	}
}
